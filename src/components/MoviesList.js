import React from 'react'
import Movie from './Movie'
import './MoviesList.css'
import data from '../data.json'

class MoviesList extends React.Component {
    constructor() {
        super()

        this.state = {
            // [
            //  {name: "Ratatouille, id: 1, rating: 5, year: 2007", favorite: false},
            //  {name: "Ratatouille, id: 2, rating: 5, year: 2007"},
            // ....]
            movies: [],
            isLoading: true
        }

        this.handleFavorite = this.handleFavorite.bind(this)
    }

    handleFavorite(id) {
        console.log('Hit handleFavorite', id)
        let changedArray = this.state.movies.map(e => {
            if(e.id === id) {
                return { ...e, favorite: true }
            } else {
                return e
            }
        })

        this.setState({
            movies: changedArray
        })
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                movies: data,
                // isLoading: false,
            })
        }, 2500)

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.isLoading === true) {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        let mappedMovies = this.state.movies.map(element => {
            return <Movie key={element.id} movie={element} handleFavorite={this.handleFavorite}/>
        })

        return (
            <div className="movies-list-container">
                {this.state.isLoading ? "LOADING..." : mappedMovies}
            </div>
        )
    }
}

export default MoviesList;