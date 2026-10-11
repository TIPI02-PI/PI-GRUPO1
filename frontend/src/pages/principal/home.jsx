import IconBiblioteca from '../../assets/icon-biblioteca.svg'
import IconComunidade from '../../assets/icon-comunidade.svg'
import IconConfig from '../../assets/icon-config.svg'
import IconJardim from '../../assets/icon-meujardim.svg'
import IconNotes from '../../assets/icon-notes.svg'
import IconPlanta from '../../assets/icon-plantaNavbar.svg'
import IconSalvar from '../../assets/icon-salvar.svg'
import IconTrilha from '../../assets/icon-trilhaEstudo.svg'
import IconAjuda from '../../assets/icon-bussola.svg'
import IconBussola from '../../assets/icon-bussola.svg'
import IconSino from '../../assets/icon-sino.svg'
import IconSetabaixo from '../../assets/icon-setaBaixo.svg'
import IconVestibular from '../../assets/icon-vestibular.svg'
import IconFiltrar from '../../assets/icon-filtro.svg'
import IconSalvarDourado from '../../assets/icon-salvarDourado.svg'
import IconEstrela from '../../assets/icon-estrela.svg'
import IconLivroDourado from '../../assets/icon-livroDourado.svg'
import IconSetadourada from '../../assets/icon-setadourada.svg'
import IconLivro from '../../assets/icon-livro.svg'
import IconSalvo from '../../assets/icon-salvoDourado.svg'
import IconVestibularDourado from '../../assets/icon-vestibularDourado.svg'
import IconSetaCaminho from '../../assets/icon-setaCaminho.svg'
import IconLupa from '../../assets/icon-lupa.svg'
import IconLapis from '../../assets/icon-lapis.svg'


import { useState } from 'react'
import ProfileNavbar from '../../components/profileNavbar/profileNavbar.jsx'
import './home.css'

const books = [
  {
    id: 1,
    title: 'Memórias póstumas de Brás Cubas',
    author: 'Machado de Assis',
    category: 'Romance · Realismo'
  },
  {
    id: 2,
    title: 'O cortiço',
    author: 'Aluísio Azevedo',
    category: 'Romance · Naturalismo'
  },
  {
    id: 3,
    title: 'A hora da estrela',
    author: 'Clarice Lispector',
    category: 'Novela · Modernismo'
  },
  {
    id: 4,
    title: 'Quarto de despejo',
    author: 'Carolina Maria de Jesus',
    category: 'Diário · Literatura brasileira'
  },
  {
    id: 5,
    title: 'Iracema',
    author: 'José de Alencar',
    category: 'Romance · Romantismo'
  }
]

export default function Home() {
  const [savedBooks, setSavedBooks] = useState([])
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleSaveBook = (id) => {
    setSavedBooks((prevSaved) =>
      prevSaved.includes(id)
        ? prevSaved.filter((bookId) => bookId !== id)
        : [...prevSaved, id]
    )
  }

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev)
  }

  return (
    <main className="home-container">
      <div className="home-layout">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div className="sidebar-group">
              <section className="sidebar-section">
                <p className="sidebar-caption">SEU UNIVERSO LITERÁRIO</p>
                <a href="#jardim" className="nav-link">
                  <img src={IconJardim} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Meu jardim</span>
                </a>
                <a href="#biblioteca" aria-current="page" className="nav-link active">
                  <img src={IconBiblioteca} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Biblioteca</span>
                  <span className="nav-dot" />
                </a>
                <a href="#trilhas" className="nav-link">
                  <img src={IconTrilha} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Trilhas de estudo</span>
                </a>
                <a href="#anotacoes" className="nav-link">
                  <img src={IconNotes} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Minhas anotações</span>
                </a>
                <a href="#obras-salvas" className="nav-link">
                  <img src={IconSalvar} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Obras salvas</span>
                </a>
                <a href="#comunidade" className="nav-link">
                  <img src={IconComunidade} width="20" height="20" alt="" className="nav-icon" />
                  <span className="nav-text">Comunidade</span>
                </a>
              </section>

              <section className="sidebar-section">
                <p className="sidebar-caption">ONDE AS LETRAS FLORESCEM</p>
                <div className="progress-card">
                  <div className="progress-card-header">
                    <img src={IconPlanta} width="18" height="18" alt="" />
                    <h2>Sua leitura floresce</h2>
                  </div>
                  <p className="progress-status">3 de 8 obras concluídas</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "37.5%" }} />
                  </div>
                  <small className="progress-hint">Uma página de cada vez.</small>
                </div>
              </section>
            </div>

            <footer className="sidebar-footer">
              <div className="sidebar-divider" />
              <blockquote className="sidebar-quote">
                "Um refúgio onde as páginas florescem e o conhecimento cria raízes."
              </blockquote>
              <a href="#configuracoes" className="footer-link">
                <img src={IconConfig} width="18" height="18" alt="" />
                Configurações
              </a>
              <a href="#ajuda" className="footer-link">
                <img src={IconAjuda} width="18" height="18" alt="" />
                Ajuda e acolhimento
              </a>
            </footer>
          </nav>
        </aside>

        <section id="biblioteca" className="main-content">
          <header className="top-header">
            <label className="search-bar">
              <img src={IconLupa} width="19" height="19" alt="" />
              <input
                type="search"
                placeholder="Busque uma obra, um autor ou uma descoberta..."
              />
              <kbd className="search-shortcut">⌘ K</kbd>
            </label>

            <div className="header-actions">
              <button type="button" className="icon-btn">
                <img src={IconBussola} width="20" height="20" alt="" />
              </button>
              <button type="button" className="icon-btn">
                <img src={IconSino} width="20" height="20" alt="" />
              </button>

              <ProfileNavbar
                name="Grazielly Lacerda"
                username="@grazlacerd"
                email="grazl@email.com"
                vestibular="FUVEST / ENEM"
                initials="GL"
                iconSeta={IconSetabaixo}
              />
            </div>
          </header>

          <section className="hero-section">
            <div className="hero-title-row">
              <div>
                <h1 className="hero-title">Entre páginas e descobertas</h1>
                <p className="hero-subtitle">
                  Sua biblioteca para ler, sentir e se preparar para o vestibular.
                </p>
              </div>
              <a href="#estante" className="shelf-link">
                <img src={IconSalvarDourado} width="17" height="17" alt="" />
                Minha estante
              </a>
            </div>

            <div className="filter-row">
              <div className="tab-buttons">
                <button type="button" className="tab-btn active">Todas as obras</button>
                <button type="button" className="tab-btn">Em leitura</button>
                <button type="button" className="tab-btn">Concluídas</button>
              </div>

              <div className="dropdown-buttons">
                <button type="button" className="dropdown-btn">
                  <img src={IconVestibular} width="16" height="16" alt="" />
                  Todos os vestibulares
                  <img src={IconSetabaixo} width="14" height="14" alt="" />
                </button>
                <button type="button" className="dropdown-btn">
                  <img src={IconFiltrar} width="16" height="16" alt="" />
                  Todos os gêneros
                  <img src={IconSetabaixo} width="14" height="14" alt="" />
                </button>
              </div>
            </div>
          </section>

          <div className="catalog-container">
            <section className="featured-row">
              <article className="featured-card">
                <img src="" width="340" height="440" alt="" className="bg-aura" />
                <img src="" width="293" height="398" alt="" className="bg-orbit" />

                <div className="featured-content">
                  <div className="featured-badge">
                    <img src={IconEstrela} width="15" height="15" alt="" />
                    <span>SUA PRÓXIMA DESCOBERTA</span>
                  </div>

                  <header>
                    <h2 className="featured-title">Dom Casmurro</h2>
                    <p className="featured-author">Machado de Assis</p>
                  </header>

                  <ul className="category-tags">
                    <li className="tag-item">Romance</li>
                    <li className="tag-item">Realismo</li>
                    <li className="tag-item">1899</li>
                  </ul>

                  <p className="featured-text">
                    Entre memórias e desconfianças, Bentinho reconstrói sua história com Capitu.
                    Explore o narrador, a ironia e os silêncios deste clássico brasileiro.
                  </p>

                  <div className="featured-actions">
                    <button type="button" className="btn-primary">
                      <img src={IconLivro} width="18" height="18" alt="" />
                      Ler obra
                    </button>
                    <button type="button" className="btn-secondary">
                      <img src={IconNotes} width="18" height="18" alt="" />
                      Guia de estudo
                    </button>
                  </div>

                  <small className="featured-details">
                    Análise literária · Contexto histórico · Questões
                  </small>
                </div>
              </article>

              <article className="reading-card">
                <header className="reading-card-header">
                  <h2>Continue sua leitura</h2>
                  <img src={IconLivroDourado} width="18" height="18" alt="" />
                </header>

                <div>
                  <h3 className="reading-book-title">Vidas secas</h3>
                  <p className="reading-author">Graciliano Ramos</p>
                  <small className="reading-chapter">Capítulo 7 · Inverno</small>
                </div>

                <div className="reading-progress">
                  <div className="progress-labels">
                    <span>Seu progresso</span>
                    <strong>54%</strong>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "54%" }} />
                  </div>
                  <small className="progress-count">7 de 13 capítulos lidos</small>
                </div>

                <div className="reading-notes">
                  <img src={IconLapis} width="14" height="14" alt="" />
                  <span>12 anotações no seu caderno</span>
                </div>

                <button type="button" className="btn-resume">
                  Retomar leitura
                  <img src={IconSetadourada} width="16" height="16" alt="" />
                </button>
              </article>
            </section>

            <section className="recommendations-section">
              <header className="section-header">
                <div>
                  <h2 className="section-title">Histórias para o seu repertório</h2>
                  <p className="section-subtitle">Clássicos e novas perspectivas para aprofundar seus estudos.</p>
                </div>
                <a href="#acervo" className="explore-link">
                  Explorar todas as obras
                  <img src={IconSetadourada} width="16" height="16" alt="" />
                </a>
              </header>

              <div className="books-grid">
                {books.map((book) => {
                  const isSaved = savedBooks.includes(book.id)
                  return (
                    <article key={book.id} className="book-card">
                      <div className="book-cover">
                        <button
                          type="button"
                          className="bookmark-btn"
                          onClick={() => toggleSaveBook(book.id)}
                          aria-label={isSaved ? "Remover dos salvos" : "Salvar obra"}
                        >
                          <img
                            src={isSaved ? IconSalvo : IconSalvar}
                            width="15"
                            height="15"
                            alt=""
                          />
                        </button>
                      </div>
                      <div className="book-info">
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">{book.author}</p>
                        <p className="book-category">{book.category}</p>
                      </div>
                    </article>
                  )
                })}
              </div>

              <aside className="banner-card">
                <img src={IconVestibularDourado} width="25" height="25" alt="" />
                <div className="banner-text">
                  <h3>Cada vestibular, um caminho de leitura.</h3>
                  <p>Organize suas obras e revisões em trilhas para Fuvest, Unicamp, Unesp e Enem.</p>
                </div>
                <a href="#trilhas" className="banner-link">
                  Conhecer as trilhas
                  <img src={IconSetaCaminho} width="16" height="16" alt="" />
                </a>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
