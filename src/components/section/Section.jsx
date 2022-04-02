import React from 'react'

const Section = ({headerLabel,children}) => {
    return (
        <section>
            <header className="major">
                <h2>{headerLabel}</h2>
            </header>
            {children}
        </section>
  )
}

export default Section