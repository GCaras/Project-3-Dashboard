import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 10 auto;
    justify-content: center;
    align-items: center;
`

const StyledModuleListItem = styled.article`
    background-color: red;
    border: solid 2px white;
    color: white;
    margin: 5px;
    height: 300px;
    padding: 5px;
    text-decoration: none;
    width: 300px;
`

const StyledButtonImage = styled.img`
    height: auto;
    width: 300px;
`

class ModuleList extends Component {
    render() {
        return(
            <div>
                <StyledModuleList>
                    <Link to="/News">
                        <StyledModuleListItem>
                            <StyledButtonImage src={this.props.news[0].image}></StyledButtonImage>
                            <h1>{this.props.news[0].headline}</h1>
                        </StyledModuleListItem>
                    </Link>
                    <StyledModuleListItem> {this.props.socialMedia}
                    </StyledModuleListItem>
                    <StyledModuleListItem> {this.props.weather}
                    </StyledModuleListItem>
                    <StyledModuleListItem> {this.props.toDo}
                    </StyledModuleListItem>
                </StyledModuleList>
                
            </div>
        )
    }
}

export default ModuleList