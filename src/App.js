import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import Character from './components/Characters'
import ricks from './images.json'

class App extends React.Component {

    state = {
        ricks,
        selected: [],
        score: 0,
        highscore: 0,
        message: ''
    }

    highScoring = () => {
        if(this.state.score >= this.state.highscore){
            this.setState({highscore: this.state.score + 1})
        }
    }

    shuffleTime = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    clickImage = (e) => {
        console.log(e.target)
        console.log('Clicked')
        this.setState({selected: [...this.state.selected, e.target.id], message: '', ricks: this.state.ricks.reverse()})
        console.log(this.state.selected)
        
        if (!this.state.selected.includes(e.target.id)) {
            console.log('you selected this image')
            
            this.setState({score: this.state.score + 1 }, this.highScoring())
        } else {
            console.log('you have already selected this image')
            this.setState({selected: [], score: 0, message: 'You lost! Resetting the score and images.'})
        }
        this.shuffleTime(ricks)
        
    }

        // }not selected, make true.
        // if selected, 
        //     1) make ALL photos false 
        //     2) update score to 0 
        //     3) update high score if needed  
        //     4) array method to shuffle the photos



    render () {
        return (
        <div>
            <Navbar 
            score = {this.state.score}
            highscore = {this.state.highscore}
            />
            <Header 
            message = {this.state.message}
            />
            {ricks.map(rick => (
            
                <Character 
                 src = {rick.path}
                 id = {rick.id}
                 alt = {rick.name}
                 name = {rick.name}
                 key = {rick.id}
                 onClick = {this.clickImage}
                />
                 ))
            }
            <Footer />
        </div>
    );

    } 
}
  
  export default App;
  