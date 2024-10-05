import PropTypes from 'prop-types'
import { Button } from "@nextui-org/react"

const Hero = ({title, subtitle, action}) => {
  return (
    <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <Button color="primary" variant="ghost">
            {action}
          </Button>
        </div>
      </div>
  )
}


Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
  };

export default Hero
