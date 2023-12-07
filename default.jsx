import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state={
        home: 'Home',
        away: 'Away',
        homeScore: 0,
        awayScore: 0,
        minute: 0,  
        detailedHome: '',
        detailedAway: '',
        playerName: '',
        homeDisplay: 'block',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',
        homeWins: 0,
        homeDraws: 0,
        homeLoses: 0,
        awayWins: 0,
        awayDraws: 0,
        awayLoses: 0,
    }
    addHome = () => {
        this.setState({
            homeScore: Number(this.state.homeScore) + 1,
            detailedHome: this.state.detailedHome + ' ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    addAway = () => {
        this.setState({
            awayScore: Number(this.state.awayScore) + 1,
            detailedAway: this.state.detailedAway + ' ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    addHomeYellow = () => {
        this.setState({
            detailedHome: this.state.detailedHome + ' (Y) ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    addAwayYellow = () => {
        this.setState({
            detailedAway: this.state.detailedAway + ' (Y) ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    addHomeRed = () => {
        this.setState({
            detailedHome: this.state.detailedHome + ' (R) ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    addAwayRed = () => {
        this.setState({
            detailedAway: this.state.detailedAway + ' (R) ' + this.state.playerName + ' ' + Number(this.state.minute) + "'",
            playerName: '',
            minute: 0,
        })
    };
    submitScore = () => {
        if (this.state.homeScore > this.state.awayScore){
            this.setState({
                homeWins: this.state.homeWins + 1,
                awayLoses: this.state.awayLoses + 1,
                homeScore: 0,
                awayScore: 0,
                detailedHome: '',
                detailedAway: '',
            })
        } else if (this.state.homeScore < this.state.awayScore){
            this.setState({
                awayWins: this.state.awayWins + 1,
                homeLoses: this.state.homeLoses + 1,
                homeScore: 0,
                awayScore: 0,
                detailedHome: '',
                detailedAway: '',
            })
        } else {
            this.setState({
                awayDraws: this.state.awayDraws + 1,
                homeDraws: this.state.homeDraws + 1,
                homeScore: 0,
                awayScore: 0,
                detailedHome: '',
                detailedAway: '',
            })
        }
    };
    homePress = () => this.setState(state => ({
        homeDisplay: 'block',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    detailedScorePress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'block',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    standingPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'block',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    homeGoalPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'block',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    homeYellowPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'block',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    homeRedPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'block',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    awayGoalPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'block',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'none',   
    }));
    awayYellowPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'block',
        awayRedDisplay: 'none',   
    }));
    awayRedPress = () => this.setState(state => ({
        homeDisplay: 'none',
        detailedScoreDisplay: 'none',
        standingDisplay: 'none',
        homeGoalDisplay: 'none',
        homeYellowDisplay: 'none',
        homeRedDisplay: 'none',
        awayGoalDisplay: 'none',
        awayYellowDisplay: 'none',
        awayRedDisplay: 'block',   
    }));
    
    render() {
        return (
            
            <View style={styles.container}>
                <ImageBackground
                    style={styles.container}
                    source={{ uri: 'https://images.pexels.com/photos/3131406/pexels-photo-3131406.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
                >
                    <View style={{display: this.state.homeDisplay}}>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.title}>
                                    SOCCER SCOREKEEPER
                                </Text>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.detailedScorePress}
                                >
                                    <View style={styles.buttonContainer}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Detailed Score
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.standingPress}
                                >
                                    <View style={styles.buttonContainer}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Standings
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homeGoalPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://www.uq.edu.au/news/filething/get-styled/large/279714/SCI%20soccer%20Adobe1%20620W.jpg?itok=iq_x2eHZ' }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.home}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                GOAL!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                    onPress={this.awayGoalPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://www.uq.edu.au/news/filething/get-styled/large/279714/SCI%20soccer%20Adobe1%20620W.jpg?itok=iq_x2eHZ' }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.away}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                GOAL!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homeYellowPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://rnz-ressh.cloudinary.com/image/upload/s--V40mEmOl--/c_scale,f_auto,q_auto,w_1050/v1643617086/4OIXOZ3_copyright_image_97632' }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.home}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                YELLOW CARD!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                    onPress={this.awayYellowPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://rnz-ressh.cloudinary.com/image/upload/s--V40mEmOl--/c_scale,f_auto,q_auto,w_1050/v1643617086/4OIXOZ3_copyright_image_97632' }}
                                    >
                                    
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.away}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                YELLOW CARD!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homeRedPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://ng.dailyadvent.com/wp-content/uploads/2019/05/RC.jpg' }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.home}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                RED CARD!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                    onPress={this.awayRedPress}
                                >
                                    <ImageBackground
                                        style={styles.button}
                                        source={{ uri: 'https://ng.dailyadvent.com/wp-content/uploads/2019/05/RC.jpg' }}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                {this.state.away}
                                            </Text>
                                            <Text style={styles.buttonText}>
                                                RED CARD!
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </View>
                            
                            <View>
                                <Text style={styles.score}>
                                    SCORE
                                </Text>
                            </View>
                            <View style={styles.paragraph}>
                                <TextInput style={styles.teams}
                                onChangeText={(home) => this.setState({home})}
                                value={this.state.home}
                                
                                /> 
                                <Text style={styles.score}>{this.state.homeScore}</Text>
                            </View>
                            
                            <View style={styles.paragraph}>
                                <TextInput style={styles.teams}
                                onChangeText={(away) => this.setState({away})}
                                value={this.state.away}
                                />
                                <Text style={styles.score}>{this.state.awayScore}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{display: this.state.detailedScoreDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Detailed Score
                                </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.detailedText}>
                                    <Text style={styles.buttonText}>{this.state.home}</Text>
                                    <Text style={styles.contentText1} multiline={true}>
                                        {this.state.detailedHome}
                                    </Text>
                                </View>
                                <View style={styles.detailedText}>
                                <Text style={styles.buttonText}>{this.state.away}</Text>
                                    <Text style={styles.contentText2} multiline={true}>
                                        {this.state.detailedAway}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.submitScore}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Submit score
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{display: this.state.standingDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Standings
                                </Text>
                            </View>
                            
                            <View>
                                <Text style={styles.score}>{this.state.home}: {this.state.homeWins}-{this.state.homeDraws}-{this.state.homeLoses}</Text>
                                <Text style={styles.score}>{this.state.away}: {this.state.awayWins}-{this.state.awayDraws}-{this.state.awayLoses}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{display: this.state.homeGoalDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Home Goal!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                            
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addHome}
                                >
                                    <View style={styles.buttonContainer}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Add Goal
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{display: this.state.awayGoalDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Away Goal!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                    
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addAway}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Add Goal
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{display: this.state.homeYellowDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Home Yellow!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                    
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addHomeYellow}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Add Yellow
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{display: this.state.awayYellowDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Away Yellow!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                    
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addAwayYellow}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Add Yellow
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{display: this.state.homeRedDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Home Red!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                    
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addHomeRed}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Add Red
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{display: this.state.awayRedDisplay}}>
                        <View style={styles.contentContainer}>
                            <View>
                                <Text style={styles.title}>
                                    Away Red!
                                </Text>
                                
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Player</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(playerName) => this.setState({playerName})}
                                    value={this.state.playerName}
                                    
                                />
                                <Text style={styles.buttonText}>Minute</Text>
                                <TextInput style={styles.contentInput}
                                    onChangeText={(minute) => this.setState({minute})}
                                    value={this.state.minute}
                                    
                                /> 
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.homePress}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Back to home
                                        </Text>
                                    </View>
                                    
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.addAwayRed}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>
                                            Add Red
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        height: deviceHeight/1.5,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'forestgreen',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white'
    },              
    title: {
        color: 'white',
        fontSize: deviceHeight/12.5,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    score: {
        color: 'white',
        fontSize: deviceHeight/20,
        textAlign: 'center',
        marginTop: 5,
    },
    paragraph: {
        color: 'white',
        fontSize: deviceHeight/20,
        textAlign: 'center',
        marginTop: 5,
        flexDirection: 'row',
    },
    teams: {
        color: 'white',
        fontSize: deviceHeight/21,
        textAlign: 'center',
        width: 100
        
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: deviceHeight/8,
        width: deviceWidth/2.5,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: deviceHeight/35,
        textAlign: 'center',
    },
    contentTitle: {
        color: 'white',
        fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contentText1: {
        color: 'white',
        fontSize: deviceHeight/25,
        textAlign: 'left',
        height: deviceHeight/3,
        width: deviceWidth/2.5,
    },
    contentText2: {
        color: 'white',
        fontSize: deviceHeight/25,
        textAlign: 'right',
        height: deviceHeight/3,
        width: deviceWidth/2.5,
    },
    contentInput: {
        color: 'white',
        fontSize: deviceHeight/21,
        textAlign: 'center',
        width: 100
        
    },
    detailedText: {
        height: deviceHeight/3,
        width: deviceWidth/2.5,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
});