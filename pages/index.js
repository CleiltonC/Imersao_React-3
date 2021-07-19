import MainGrid from "../styles/src/components/MainGrid";
import Box from "../styles/src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../styles/src/lib/fakutCommons";
import { ProfileRelationsBoxWrapper } from "../styles/src/components/profileRelations";

const ProfileSidebar = (props) => {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
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
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`http://github.com/${itemAtual}.png`} />
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
