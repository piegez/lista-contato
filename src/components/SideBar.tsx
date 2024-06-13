import {
  ImagemPerfil,
  LinkRede,
  RedesSociais,
  SidebarContainer,
  SidebarProps,
  ToggleButton,
} from "./styledComponents";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <ImagemPerfil
        src="https://avatars.githubusercontent.com/piegez"
        alt="Perfil"
      />
      <h2>Jessica Sampaio</h2>
      <RedesSociais>
        <LinkRede
          href="www.linkedin.com/in/jessicamsampaio"
          target="_blank"
        >
          LinkedIn
        </LinkRede>
        <LinkRede href="https://github.com/piegez" target="_blank">
          GitHub
        </LinkRede>
      </RedesSociais>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? "Esconder" : "Mostrar"}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
