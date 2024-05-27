"use client";
import { Button, Card, CardBody, Spinner, Textarea } from "@nextui-org/react";

import { ArrowRightIcon } from "./arrow_icon_right";
import { useState } from "react";
import { ResponseCard } from "./components/ResponseCard";
import { RequestCard } from "./components/RequestCard";

export default function Home() {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setIsDisabled(value === "");
    setInputValue(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.shiftKey && event.key === "Enter") {
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      // sendAPIRequest();
      setInputValue("");
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="basis-11/12 overflow-auto">
        <div className="px-16 py-8 flex flex-col">
          <ResponseCard>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </ResponseCard>
          <RequestCard>
            <p>Make beautiful websites regardless of your design experience.</p>
          </RequestCard>
          <ResponseCard>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur
            </p>
          </ResponseCard>
          <RequestCard>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </p>
          </RequestCard>
          <ResponseCard>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains.
            </p>
          </ResponseCard>
          <ResponseCard>
            <Spinner label="" color="secondary" />
          </ResponseCard>
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
            isIconOnly
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
