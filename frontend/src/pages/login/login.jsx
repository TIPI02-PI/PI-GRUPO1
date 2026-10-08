import { useState } from 'react'
import PopUp from '../../components/popUp/popUp.jsx'
import './login.css'
import Backgroundicon from '../../assets/backgroundicon.svg'
import Sun from '../../assets/sun.svg'
import User from '../../assets/user.svg'
import Password from '../../assets/password.svg'
import erroIcon from '../../assets/erroicon.png'


export default function Login() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPopUpOpen(true);
    };

    return (
        <main className="login-page">
            <section className="slogan">
                <figure>
                    <blockquote>
                        "Um refúgio acolhedor onde as páginas florescem e o conhecimento cria raízes."
                    </blockquote>
                    <figcaption>
                        <cite>Clube de Leitores D'Lírios</cite>
                    </figcaption>
                </figure>
            </section>

            <section className="login">
                <div>
                    <header className="welcome">
                        <img src={Sun} alt="" aria-hidden="true" />
                        <p>Bem que as flores disseram, você voltaria</p>
                    </header>

                    <div className="container">
                        <h1>Qual livro você precisa<br /> hoje?</h1>
                        <p className='subtitle'>Entre na sua conta para continuar sua jornada pelos estudos literários.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <img src={User} alt="" aria-hidden="true" className="input-icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="seuemail@exemplo.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">Senha</label>
                                <div className="input-group">
                                    <img src={Password} alt="" aria-hidden="true" className="input-icon" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="forgotPassword">
                                <label className="checkbox-container" htmlFor="remember">
                                    <input type="checkbox" id="remember" name="remember" />
                                    <span>Lembrar acesso</span>
                                </label>

                                <a href="#esqueceu-senha">
                                    Esqueceu a senha?
                                </a>
                            </div>

                            <div className="button-login">
                                <button type="submit">Entrar no Jardim</button>
                            </div>
                            <div className='button-group'>
                                <button type="button">
                                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>google [#ffffff178]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#ffffff178]"> </path> </g> </g> </g> </g></svg>
                                </button>
                                <button type="button">
                                    <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffffff" stroke="#ffffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
                                </button>

                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 1200 1227">
                                        <path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <footer className="signUp">
                        <p>
                            Sua primeira vez? <a href="#cadastro">Crie sua conta aqui!</a>
                        </p>
                    </footer>
                </div>
            </section>

            <div className="backgroundicon" aria-hidden="true">
                <img src={Backgroundicon} alt="" className="icon" />
            </div>

            <PopUp
                isOpen={isPopUpOpen}
                onClose={() => setIsPopUpOpen(false)}
                firstText='"O jardim floresceu para você."'
                title="Conexão Estabelecida!"
                secondText="Seu portal literário está pronto. Suas histórias favoritas, marcas de página e sonhos estão exatamente onde você os deixou."
                lastText="PREPARE-SE PARA A LEITURA"
            />

            <PopUp
                onClose={() => setIsPopUpOpen(false)}
                error = {erroIcon}
                firstText='“O portal ainda espera por você.”'
                title="E-mail ou senha incorretos"
                secondText="Não foi possível entrar com esses dados. Confira seu e-mail e sua senha e tente novamente. Estamos aqui para acolher você."
                tryAgain={"Tente Novamente"}
                lastText="SUA HISTÓRIA CONTINUA"
            />
        </main>
    )
}