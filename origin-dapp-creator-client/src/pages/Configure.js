'use strict'

import React from 'react'

import Redirect from 'components/Redirect'

class Configure extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      config: props.config,
      redirect: null
    }

    this.toggleFilterByOwn = this.toggleFilterByOwn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleFilterByOwn (event) {
    const newConfig = {
      ...this.state.config,
      filters: {
        ...this.state.config.filters,
        listings: {
          ...this.state.config.filters.listings,
          marketplacePublisher: event.target.checked ? web3.eth.accounts[0] : null
        }
      }
    }

    this.setState({ config: newConfig })
    this.props.onChange(newConfig)
  }

  async handleSubmit () {
    this.setState({
      redirect: '/metamask'
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderRedirect()}

        <h1>Configure Your Marketplace</h1>
        <h4>Finish setting up your marketplace with the options below.</h4>

        <div className="form-group">
          <label>Filter Listings (optional)</label>

          <p>
            <small>You can choose to only show listings created on your marketplace or specific types of listings. Otherwise, your DApp will show listings from all Origin marketplaces.</small>
          </p>

          <div className="option">
            Limit to only my own
            <input className="form-check-input"
              type="checkbox"
              onClick={this.toggleFilterByOwn} />
          </div>

          <div className="option disabled">
            Limit by type (coming soon)
            <input className="form-check-input" type="checkbox" name="" disabled />
          </div>
        </div>

        <div className="form-actions clearfix">
          <button onClick={() => this.setState({ redirect: '/customize' })}
              className="btn btn-outline-primary btn-lg btn-left">
            Back
          </button>

          <button type="submit"
              className="btn btn-primary btn-lg btn-right"
              onClick={this.handleSubmit}>
            Done
          </button>
        </div>
      </form>
    )
  }

  renderRedirect () {
    if (this.state.redirect !== null) {
      return <Redirect to={this.state.redirect} />
    }
  }
}

require('react-styl')(`
  .option
    background-color: var(--pale-grey-four)
    border: 1px solid var(--light)
    padding: 0.75rem
    border-radius: var(--default-radius)
    margin-bottom: 0.25rem
    position: relative

  .disabled
    color: var(--light)

  .option .form-check-input
    right: 1rem
`)

export default Configure
