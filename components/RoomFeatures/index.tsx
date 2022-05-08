import Room from "dtos/Room";
import * as S from "./styles"

type Props = {
  room: Room
}

const RoomFeatures = ({ room }: Props) => {

  const internet = room.features?.internet ?? false
  const bathroom = room.features?.bathroom ?? false
  const airConditioned = room.features?.airConditioned ?? false
  const furnished = room.features?.furnished ?? false
  const roomCleaning = room.features?.roomCleaning ?? false


  return (
    <S.Wrapper>
      <div className="features mt-5">
        <h3 className="mb-4">Features:</h3>
        <div className="room-feature">
          <i className="fa fa-cog fa-fw fa-cutlery" aria-hidden={true}></i>
          <p>Cozinha</p>
        </div>
        <div className="room-feature">
          <i className="fa fa-cog fa-fw fa-bed" aria-hidden={true}></i>
          <p>1 camas</p>
        </div>
        <div className="room-feature">
          <i
            className={
              bathroom ? 'fa fa-check text-success' : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Banheiro</p>
        </div>
        <div className="room-feature">
          <i
            className={
              airConditioned
                ? 'fa fa-check text-success'
                : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Ar Condicionado</p>
        </div>
        <div className="room-feature">
          <i
            className={
              furnished
                ? 'fa fa-check text-success'
                : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Mobiliada</p>
        </div>
        <div className="room-feature">
          <i
            className={
              internet ? 'fa fa-check text-success' : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Internet</p>
        </div>
        <div className="room-feature">
          <i
            className={
              roomCleaning
                ? 'fa fa-check text-success'
                : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Serviços de limpeza</p>
        </div>

      </div>
    </S.Wrapper>
  )
}

export default RoomFeatures
