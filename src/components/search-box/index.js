import React, { useState, createRef } from 'react'
import { InstantSearch, Index, InfiniteHits, connectStateResults } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import { Root, HitsWrapper } from './styles'
import Input from './Input'
import * as hitComps from './ManufacturerHit'

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits > 0 ? children : `No results for '${state.query}'`,
)

const Stats = connectStateResults(
  ({ searchResults: res }) => res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`,
)

export default function SearchBox({ indices, user }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [_focus, setFocus] = useState(false)
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <Input user={user} />
      <HitsWrapper show={query?.length > 0}>
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <h5>{title}</h5>
              <Stats />
            </header>
            <Results>
              <InfiniteHits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
      </HitsWrapper>
    </InstantSearch>
  )
}
