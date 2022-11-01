import React from 'react'

export default function Redesign({userinputs}) {
    console.log(userinputs)

    const render_articles = userinputs.map((articlesRow) => {
        return <div className='articles-row'>{articlesRow.title}</div>
      })
  


  return (
    <>
    <div>Redesign</div>
    <div>{render_articles}</div>
    </>
  )
}
