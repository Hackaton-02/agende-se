import MainComponent from 'components/shared/MainComponent'
import NoData from 'components/shared/NoData'
import Menu from 'components/Storefront/Menu'

const List: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab='orders' />
      <NoData message="Ainda não implementado" />
    </MainComponent>
  )
}

export default List
