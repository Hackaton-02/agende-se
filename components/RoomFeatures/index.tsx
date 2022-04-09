import * as S from "./styles"

type Room = {
  room: {
    bathroom?: boolean
    airConditioned?: boolean
    petsAllowed?: boolean
    internet?: boolean
    roomCleaning?: boolean
  }
}

const RoomFeatures = ({
  room: {
    bathroom = false,
    airConditioned = true,
    petsAllowed = false,
    internet = true,
    roomCleaning = true
  }
}: Room) => {
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
              petsAllowed
                ? 'fa fa-check text-success'
                : 'fa fa-times text-danger'
            }
            aria-hidden={true}
          ></i>
          <p>Pets</p>
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
