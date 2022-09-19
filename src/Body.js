import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Body() {
    return(
        <div class="corpo">
            <div class="esquerda">
                <Stories></Stories>
                <Posts></Posts>
            </div>

            <Sidebar></Sidebar>

            <Suggestions></Suggestions>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        
        </div>
    )
}