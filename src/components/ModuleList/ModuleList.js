import React, { Component } from 'react'
import styled from 'styled-components'

const StyledModuleList = styled.section`
    margin: 0 auto;
`

const StyledModuleListItem = styled.article`
    height: 200px;
    width: 300px;
`

class ModuleList extends Component {
    render() {
        return(
            <div>
                <StyledModuleList>
                    <StyledModuleListItem> {this.props.news}
                    </StyledModuleListItem>
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