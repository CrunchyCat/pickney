import React from 'react';
import { connect } from 'react-redux';
import { ConnectedItemListItem } from './ItemListItem';
import { ConnectedUsernameDisplay } from './UsernameDisplay'

const Favorites = ({ id, favorites }) => (
    <div className="p-2 m-2">
        <h1 className="mt-2 mb-3"><ConnectedUsernameDisplay id={id} />'s favorites</h1>
        {favorites.map(item => (<ConnectedItemListItem {...{id: item}} key={item} />))}
    </div>
);

const mapStateToProps = (state) => ({ 
    id: state.user.id,
    favorites: state.user.favorites
 });

export const ConnectedFavorites = connect(mapStateToProps)(Favorites);