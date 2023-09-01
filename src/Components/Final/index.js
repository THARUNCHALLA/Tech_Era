import {Link} from 'react-router-dom'

import './index.css'

const Final = props => {
  const {user} = props
  const {logoUrl, name, id} = user
  return (
    <Link to={`/courses/${id}`}>
      <li>
        <img src={logoUrl} alt={name} className="image" />
        <p className="heading1">{name}</p>
      </li>
    </Link>
  )
}
export default Final
