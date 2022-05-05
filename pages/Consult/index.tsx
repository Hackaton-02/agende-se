import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import Menu from 'components/Storefront/Menu'

const Consult: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab='my_consults' />
      <NoData message="Ainda não implementado" />
    </MainComponent>
  )
}

export default Consult
