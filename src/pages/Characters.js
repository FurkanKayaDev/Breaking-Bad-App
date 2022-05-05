import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../Redux/characterSlice/characterSlice';
import styles from './characters.styles'
import Loading from '../components/Loading';
import Error from '../components/Error';

function Characters({ navigation }) {
    const characters = useSelector((state) => state.characters.items);
    const nextPage = useSelector((state) => state.characters.page);
    const status = useSelector((state) => state.characters.status);
    const error = useSelector((state) => state.characters.error);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const dispatch = useDispatch();

    const handleGoDetail = (char_id, name) => {
        navigation.navigate('DetailPage', { title: name, char_id, name });
    }
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCharacters());
        }
    }, [dispatch], status)

    if (status === 'failed') {
        return <Error message={error} />
    }

    return (
        <View style={{ backgroundColor: '#e0e0e0' }}>
            <ScrollView>
                <View style={styles.container}>
                    {characters.map(character =>
                        <View key={character.char_id} style={styles.item} >
                            <TouchableOpacity onPress={() => handleGoDetail(character.char_id, character.name)}>
                                <Image source={{ uri: character.img }} style={styles.img} />
                                <Text style={styles.text}>{character.name}</Text>
                            </TouchableOpacity>
                        </View>)}
                </View>
                {status === 'loading' && <Loading />}
                {hasNextPage && status !== 'loading' && (
                    <TouchableOpacity onPress={() => dispatch(fetchCharacters(nextPage))}>
                        <Text style={styles.load}>Load More {nextPage}</Text>
                    </TouchableOpacity>)}
                {!hasNextPage && <Text style={styles.footer_text}>There is nothing to be shown</Text>}

            </ScrollView>
        </View>
    )
}

export default Characters