import FooterData from './FooterData';
import info from "/src/assets/footer.json"

const Footer = () => {
  return (
    <footer className='p-20'>
      <FooterData info={info}/>
    </footer>
  )
}

export default Footer