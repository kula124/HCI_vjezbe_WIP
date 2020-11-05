import React from "react"

import styles from "./style.module.css"

const ComboboxItem = ({ language, name, flag, setSelected, selected }) => (
  <div
    key={name}
    className={`${styles.comboboxItem} ${selected ? styles.selected : ""}`}
    onClick={() => setSelected({ language, name })}
  >
    <span>{language}</span>
    <img src={flag} alt={name} />
  </div>
)

export default ComboboxItem
