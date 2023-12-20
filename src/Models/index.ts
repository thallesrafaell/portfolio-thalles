export class Project {
  id: number
  image: string
  titulo: string
  descricao: string
  tecnologia: string[]
  github: string
  deploy: string

  constructor(
    id: number,
    image: string,
    titulo: string,
    descricao: string,
    tecnologia: string[],
    github: string,
    deploy: string
  ) {
    this.id = id
    this.image = image
    this.titulo = titulo
    this.descricao = descricao
    this.tecnologia = tecnologia
    this.github = github
    this.deploy = deploy
  }
}
