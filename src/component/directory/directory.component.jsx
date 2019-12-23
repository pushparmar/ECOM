import React from 'react';
import MenuItem from './../menu-item/menu-item.component'
import './directory.styles.scss'

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';


const Directory = ({sections}) => {
    return(
        <div className="directory-menu">
            {
                sections.map(({id , ...otherSectionProps}) =>{
                    return <MenuItem key={id} {...otherSectionProps}></MenuItem>
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);