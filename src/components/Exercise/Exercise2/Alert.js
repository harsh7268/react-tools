import React from 'react'

export default function Alert(props) {
  return (
  props.alertText &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>{props.alertText.type} ! </strong>{props.alertText.message}
</div>
  )
}
