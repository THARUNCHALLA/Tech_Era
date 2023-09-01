import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

const apiStatus1 = {
  success: 'SUCCESS',
  failure: 'Failure',
  Inprogress: 'InProgress',
}

class Course extends Component {
  state = {Initial1: {}, api1: ''}

  componentDidMount() {
    this.getInformation()
  }

  getInformation = async () => {
    this.setState({api1: apiStatus1.Inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response1 = await fetch(apiUrl)
    const Data12 = await response1.json()
    if (response1.ok === true) {
      const Tharun = Data12.course_details
      const Updated1 = {
        description: Tharun.description,
        imageUrl: Tharun.image_url,
        name: Tharun.name,
        id: Tharun.id,
      }
      this.setState({Initial1: Updated1, api1: apiStatus1.success})
    } else {
      this.setState({api1: apiStatus1.failure})
    }
  }

  tharun123 = () => {
    this.getInformation()
  }

  renderSuccess = () => {
    const {Initial1} = this.state
    const {imageUrl, name, description} = Initial1
    return (
      <>
        <Header />
        <div className="CENTER">
          <div className="Middle">
            <img src={imageUrl} alt={name} className="IMAGE" />
            <div className="center12">
              <h1 className="name">{name}</h1>
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="center">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="oops">Oops! Something Went Wrong</h1>
      <p className="We">We cannot seem to find the page you are looking for</p>
      <button type="button" className="button" onClick={this.tharun123}>
        Retry
      </button>
    </div>
  )

  tharun1 = () => {
    const {api1} = this.state
    switch (api1) {
      case apiStatus1.success:
        return this.renderSuccess()
      case apiStatus1.failure:
        return this.renderFailureView()
      case apiStatus1.Inprogress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.tharun1()}</div>
  }
}
export default Course
