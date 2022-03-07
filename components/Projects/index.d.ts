interface IVariants {
  hidden: {
    opacity: number
    y: number
  }
  visible: {
    opacity: number
    y: number
  }
  startFade: {
    opacity: number
  }
  endFade: {
    opacity: number
  }
}

export interface IProjectCard {
  variants: Variants
  name: string
  description: string
  type: 'Website' | 'CLI' | 'Misc' | string
  tags: string[]
  picture: string
  repoLink: string
}
