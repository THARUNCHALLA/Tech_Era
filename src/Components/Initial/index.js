import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Final from '../Final'

import './index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'Failure',
  Inprogress: 'InProgress',
}

class Initial extends Component {
  state = {Final1: [], api: ''}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({api: apiStatus.Inprogress})
    const ApiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(ApiUrl)
    const Data = await response.json()
    if (response.ok === true) {
      const DataInformation = Data.courses
      const UpdatedData = DataInformation.map(each => ({
        name: each.name,
        logoUrl: each.logo_url,
        id: each.id,
      }))
      this.setState({Final1: UpdatedData, api: apiStatus.success})
    } else {
      this.setState({api: apiStatus.failure})
    }
  }

  tharun12 = () => {
    this.getDetails()
  }

  renderSuccess = () => {
    const {Final1} = this.state
    return (
      <>
        <Header />
        <h1 className="heading">Courses</h1>
        <ul className="unordered">
          {Final1.map(eachItem => (
            <Final user={eachItem} key={eachItem.id} />
          ))}
        </ul>
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
      <button type="button" className="button" onClick={this.tharun12}>
        Retry
      </button>
    </div>
  )

  tharun = () => {
    const {api} = this.state
    switch (api) {
      case apiStatus.success:
        return this.renderSuccess()
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.Inprogress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.tharun()}</div>
  }
}

export default Initial
