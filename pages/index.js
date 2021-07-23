import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import Image from "next/image";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../styles/lib/fakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/profileRelations";

const ProfileSidebar = (props) => {
  return (
    <Box>
      <Image
        src={`https://github.com/${props.githubUser}.png`}
        width={500}
        height={500}
        style={{ borderRadius: "8px" }}
        alt={"Profile Image"}
      />
    </Box>
  );
};

const pessoasFavoritas = [
  "juunegreiros",
  "omariosouto",
  "peas",
  "marcobrunodev",
  "rafaballerini",
  "felipefialho",
];

export default function Home() {
  const githubUser = "CleiltonC";

  return (
    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smalltitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <Image
                        src={`http://github.com/${itemAtual}.png`}
                        width={102}
                        height={120}
                        alt={itemAtual}
                      />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
