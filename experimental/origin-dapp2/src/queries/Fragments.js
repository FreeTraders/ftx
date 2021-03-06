import gql from 'graphql-tag'

export default {
  Account: {
    balance: gql`
      fragment balanceFields on Account {
        id
        role
        name
        balance {
          eth
          wei
        }
        ogn: token(symbol: "OGN") {
          id
          balance
        }
      }
    `
  },
  Listing: {
    basic: gql`
      fragment basicListingFields on Listing {
        id
        status
        totalEvents
        seller {
          id
        }
        arbitrator {
          id
        }
        deposit
        depositAvailable
        createdEvent {
          timestamp
        }

        category
        categoryStr
        subCategory
        title
        description
        currencyId
        multiUnit
        unitsTotal
        unitsAvailable
        unitsSold
        featured
        hidden
        price {
          amount
          currency
        }
        media {
          url
          urlExpanded
          contentType
        }
      }
    `
  },
  Offer: {
    basic: gql`
      fragment basicOfferFields on Offer {
        id
        listingId
        offerId
        value
        currency
        refund
        commission
        status
        finalizes
        arbitrator {
          id
        }
        affiliate {
          id
        }
        buyer {
          id
        }
        withdrawnBy {
          id
        }
        createdEvent {
          timestamp
        }
        acceptedEvent {
          timestamp
        }
        finalizedEvent {
          timestamp
        }
        withdrawnEvent {
          timestamp
        }
        disputedEvent {
          timestamp
        }
        rulingEvent {
          timestamp
        }
        statusStr
      }
    `
  },
  Transaction: {
    basic: gql`
      fragment basicTransactionFields on Transaction {
        id
        status
        submittedAt
        blockNumber
        receipt {
          id
          events {
            id
            event
            returnValues {
              listingID
              offerID
              party
            }
          }
        }
      }
    `
  }
}
