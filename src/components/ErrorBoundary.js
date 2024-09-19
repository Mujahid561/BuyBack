import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state={
error:""
    }
    static getDerivedStateFromError(error){
        return{
            error:error
        }
    }

  componentDidCatch(err,info){
// console.log(info)
  }

  render() {
    if(this.props.error){
    return (
      <div>
        <h1 className='flex justify-center text-center '>Something went wrong!!</h1>
      </div>
    )}
  }
}
