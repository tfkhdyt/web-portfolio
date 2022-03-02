import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      <Head>
        <title>TFKHDYT - Web Portfolio</title>
      </Head>
      <Layout>
        <Hero />
        <div id='about' className='scroll-mt-20 text-3xl font-bold'>
          About
        </div>
        <p className='relative'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ligula
          egestas, maximus tellus sit amet, gravida justo. Integer rhoncus et
          tellus rutrum fringilla. Vestibulum nulla lorem, consectetur at
          euismod sed, pretium non massa. Duis justo odio, tristique quis
          malesuada vel, aliquam in ante. Phasellus sed consequat arcu. Praesent
          euismod, erat eu posuere malesuada, est eros fermentum mi, eget
          rhoncus tortor nisl eget est. Aenean dapibus lacus sit amet lacus
          malesuada sagittis. Maecenas dignissim lobortis elit euismod porta.
          Mauris vel quam et massa aliquam finibus in vel eros. Mauris congue
          neque ut semper fermentum. Pellentesque ac mauris nisl. Aliquam erat
          volutpat. Curabitur ut mi sit amet tortor efficitur ullamcorper.
          Mauris sed dolor laoreet, efficitur odio et, semper est. Nam nunc
          velit, rhoncus eget nulla quis, finibus consectetur tellus.
          Suspendisse eu ex eu dolor dapibus cursus. Duis nec ligula felis. Nunc
          eget sapien ornare felis congue commodo at non enim. Sed vitae ipsum
          posuere, suscipit eros eget, pharetra ligula. Vivamus eget nunc
          malesuada, placerat libero ut, lobortis dolor. Aliquam erat volutpat.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Duis hendrerit at turpis id congue. Sed eget
          nunc eu massa lacinia placerat. Praesent mattis mi felis, vel maximus
          diam pellentesque rutrum. Praesent porttitor mi non tortor accumsan
          semper. Phasellus in dui ac neque venenatis porta vitae volutpat
          risus. Pellentesque vestibulum mauris vitae augue laoreet, non
          bibendum tellus cursus. Vivamus eu mi et urna scelerisque semper.
          Curabitur vel ultrices orci. Pellentesque faucibus vitae urna et
          pharetra. Donec ultricies fringilla dolor sit amet iaculis. Etiam eu
          tincidunt dui, quis molestie nulla. Vestibulum a eros ultricies ante
          laoreet iaculis. Vivamus nec sem non orci vestibulum dictum eget ac
          arcu. Aliquam vitae enim odio. Cras molestie lacinia ante et tempor.
          Cras interdum ex a neque cursus, non viverra urna vehicula. Phasellus
          efficitur suscipit leo non blandit. Curabitur cursus nisl quis ipsum
          tempus, non porta magna dapibus. Aliquam lorem ipsum, egestas eu
          faucibus elementum, dictum ultricies nisi. Nunc ornare a ligula ut
          consectetur. Pellentesque faucibus fringilla tempor. Nullam non ex
          risus. Vivamus dapibus dui sed magna varius tristique. Maecenas
          venenatis a nisi in semper. Etiam dictum consequat odio, ut ultricies
          sem ullamcorper ut. Praesent ac nunc tortor. Nulla at ex metus. Fusce
          semper ante vitae tortor iaculis mattis. Donec euismod diam ac dapibus
          venenatis. Duis laoreet lacus in tortor eleifend, vitae condimentum
          tellus tristique. Nunc cursus hendrerit erat et volutpat. Ut dictum
          ornare cursus. Nulla eleifend interdum metus sit amet sodales.
          Curabitur ipsum metus, dignissim in volutpat nec, cursus vitae nisi.
          Fusce hendrerit sodales luctus. Sed in pulvinar tellus. Nunc sed
          mauris nec augue pharetra faucibus sodales ut lorem. Maecenas
          consequat ex sit amet mollis ultrices. Maecenas fringilla sapien eget
          ligula rutrum accumsan. Curabitur non tortor lacus. Proin blandit,
          tellus a aliquam luctus, libero eros pretium lorem, eget mattis urna
          enim blandit arcu. Vestibulum maximus lacus at auctor venenatis.
          Aenean facilisis mollis sapien. Pellentesque in massa eleifend,
          sollicitudin mi porttitor, cursus tellus. Mauris scelerisque, ante sed
          varius aliquet, dui nisi euismod erat, id ultricies mauris eros at
          risus. Nunc a mi vel urna porta pretium ut id nisl. Nulla facilisi.
          Nunc suscipit pulvinar suscipit. Ut ac mollis metus, mattis commodo
          odio. Vestibulum molestie risus nisi, a rutrum leo venenatis in.
          Quisque varius lacus eget fermentum rutrum. Donec vulputate vehicula
          quam, malesuada porta velit. Morbi bibendum rhoncus ipsum, vitae
          interdum orci sodales sed. Aenean id sem consequat, euismod neque
          eget, congue sem. Integer placerat vel nulla a imperdiet. Nunc commodo
          risus leo, vitae tempor eros tincidunt et. Proin ornare sapien in
          tristique pharetra. Sed finibus purus leo, vitae tempor nisi
          sollicitudin et. Sed at ligula nisi. Mauris ut felis volutpat, pretium
          augue et, suscipit orci. Morbi molestie semper tortor sit amet
          viverra.{' '}
        </p>
      </Layout>
    </>
  )
}

export default Home
