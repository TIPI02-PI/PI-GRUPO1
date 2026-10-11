import './cadastro.css'
import { Link } from 'react-router-dom'
import Backgroundicon from '../../assets/backgroundIconCadastro.svg'
import User from '../../assets/user.svg'
import Password from '../../assets/password.svg'

export default function Cadastro() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="auth-wrapper">
      <div className="bg-decor" aria-hidden="true">
        <img src={Backgroundicon} alt="" className="bg-image" />
      </div>

      <section className="register-section">
        <div>
          <div className="register-card">
            <h1>Sua história começa aqui</h1>
            <p className="register-subtitle">
              Crie sua conta e floresça entre livros, descobertas e novas histórias.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="nome">Nome</label>
                <div className="field-control">
                  <img src={User} alt="" aria-hidden="true" className="field-icon" />
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Como podemos chamar você?"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <div className="field-control">
                  <img src={User} alt="" aria-hidden="true" className="field-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password">Senha</label>
                <div className="field-control">
                  <img src={Password} alt="" aria-hidden="true" className="field-icon" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <p className="field-help-text">Use pelo menos 8 caracteres.</p>
              </div>

              <div className="form-field">
                <label htmlFor="cpf">CPF</label>
                <div className="field-control">
                  <img src={Password} alt="" aria-hidden="true" className="field-icon" />
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="confirmPassword">Confirmação de senha</label>
                <div className="field-control">
                  <img src={Password} alt="" aria-hidden="true" className="field-icon" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="extra-fields-row">
                <div className="extra-field-col">
                  <label htmlFor="vestibular">Vestibular</label>
                  <div className="extra-field-control">
                    <img src={Password} alt="" aria-hidden="true" className="field-icon" />
                    <input
                      type="text"
                      id="vestibular"
                      name="vestibular"
                      placeholder="Seu vestibular"
                      required
                    />
                  </div>
                </div>

                <div className="extra-field-col">
                  <label htmlFor="curso">Curso escolhido</label>
                  <div className="extra-field-control">
                    <input
                      type="text"
                      id="curso"
                      name="curso"
                      placeholder="Seu curso escolhido"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="terms-section">
                <label className="checkbox-field" htmlFor="remember">
                  <input type="checkbox" id="remember" name="remember" />
                  <span>
                    Li e aceito os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade.</a>
                  </span>
                </label>
              </div>

              <div className="submit-wrapper">
                <button type="submit">Criar conta</button>
              </div>

              <div className="or-divider">
                <hr />
                <span>ou</span>
                <hr />
              </div>

              <div className="social-actions">
                <button type="button" aria-label="Entrar com Google">
                  <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <title>google [#ffffff178]</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#ffffff">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#ffffff178]" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>

                <button type="button" aria-label="Entrar com Facebook">
                  <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <title>facebook [#176]</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>

                <button type="button" aria-label="Entrar com X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 1200 1227">
                    <path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <footer className="register-footer">
            <p>
              Já tem uma conta? <Link to="/">Entre no jardim</Link>
            </p>
          </footer>
        </div>
      </section>

      <section className="quote-container">
        <figure>
          <blockquote>
            Suponho que me entender não é uma questão de inteligência e sim de sentir, de entrar em contato...<br></br>Ou toca, ou não toca.
          </blockquote>
          <figcaption>
            <cite>CLARICE LISPECTOR</cite>
          </figcaption>
        </figure>
      </section>
    </main>
  )
}