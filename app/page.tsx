"use client";
import { Button, Card, CardBody, Spinner, Textarea } from "@nextui-org/react";

import { ArrowRightIcon } from "./arrow_icon_right";
import { useState } from "react";
import { ResponseCard } from "./components/ResponseCard";
import { RequestCard } from "./components/RequestCard";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const isDisabled = inputValue === "";
  const [elements, setElements] = useState<React.JSX.Element[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const origin = "http://127.0.0.1:5000";

  const getRequestCard = (query: string): React.JSX.Element => {
    return (
      <RequestCard key={uuidv4()}>
        <p>{query}</p>
      </RequestCard>
    );
  };

  const getResponseCard = (data: any, status: number): React.JSX.Element => {
    let extra_styles = "";
    let content = `data: ${data["data"]}`;
    if (status == 400) {
      extra_styles = "bg-amber-200";
      content = "Invalid Request, please check your prompt";
    }
    if (status == 500) {
      extra_styles = "bg-red-300";
      content = "Internal Server error";
    }

    return (
      <ResponseCard extra_styles={extra_styles} key={uuidv4()}>
        <p>{content}</p>
      </ResponseCard>
    );
  };

  const sendAPIRequest = (query: string) => {
    setElements((elements) => [...elements, getRequestCard(query)]);
    setLoading(true);
    axios
      .post(`${origin}/v1/ask`, { query: query })
      .then((response) => {
        setElements((elements) => [
          ...elements,
          getResponseCard(response.data, response.status),
        ]);
      })
      .catch((error) => {
        setElements((elements) => [
          ...elements,
          getResponseCard(error.response, error.response.status),
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.shiftKey && event.key === "Enter") {
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      sendAPIRequest(inputValue.trim());
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="basis-11/12 overflow-auto">
        <div className="px-16 py-8 flex flex-col" id="chat-window">
          {elements.map((element) => element)}
          {loading && (
            <ResponseCard>
              <Spinner label="" color="secondary" />
            </ResponseCard>
          )}
        </div>
      </div>
      <div className="basis-1/12 bg-gray-600">
        <div className="flex items-center p-6">
          <Textarea
            type="text"
            label="Message / Prompt"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
            minRows={1}
            maxRows={3}
          />
          <Button
            isLoading={false}
            color="success"
            variant="faded"
            aria-label="Take a photo"
            disabled={isDisabled}
            onClick={() => sendAPIRequest(inputValue)}
            isIconOnly
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
