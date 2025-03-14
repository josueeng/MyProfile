import React, { useState, useEffect } from "react";
import * as M from "./Home.styled.jsx";
import eu from "../../../assets/imagens/eu.png";


export default function Main() {
  const [verb, setVerb] = useState("construo");
  const verbs = ["construo", "organizo", "estruturo", "implemento"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = index + 1 === verbs.length ? 0 : index + 1;
      setVerb(verbs[index]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <M.ContSobre>
        <M.ContTextPrinc>
          <M.TextMain>Oi 👋, </M.TextMain>
          <M.TextMain>Meu nome é Josué.</M.TextMain>
          <M.TextMain>
            Eu <M.TextSpan>{verb}</M.TextSpan> experiências para a web.
          </M.TextMain>
        </M.ContTextPrinc>
        <M.Eu src={eu} alt="Josué" />
      </M.ContSobre>
    </>
  );
}
