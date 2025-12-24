import { Fragment, ReactNode, useEffect, useReducer } from "react";
import { normalizeCounter } from "../../normalizeCounter";
import { AnimatedText, OuterContainer, StaticText } from "./styled";

type Props = {
  words: Array<string>;
  children: ReactNode;
};

export function TextRoll(props: Props) {
  const [currentIndex, increment] = useReducer(
    (index: number) => normalizeCounter(index + 1, props.words.length),
    -1
  );

  const [word1, word2] = [
    props.words.at(currentIndex),
    props.words.at(normalizeCounter(currentIndex + 1, props.words.length)),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      increment();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const children = (
    <Fragment>
      <div>&nbsp;</div>
      {props.children}
    </Fragment>
  );

  if (currentIndex === -1) {
    return (
      <OuterContainer>
        {children}
        <StaticText>{props.words.at(0)}</StaticText>
      </OuterContainer>
    );
  }

  return (
    <OuterContainer>
      {children}

      <AnimatedText key={word1} $animation="out">
        {word1}
      </AnimatedText>

      <AnimatedText key={word2} $animation="in">
        {word2}
      </AnimatedText>
    </OuterContainer>
  );
}
