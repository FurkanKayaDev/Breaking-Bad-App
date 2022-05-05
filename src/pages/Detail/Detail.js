import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../Redux/DetailSlice/detailSlice'
import styles from './Detail.styles'
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail({ route }) {
    const { char_id } = route.params;
    const details = useSelector((state) => state.details.items);
    const status = useSelector((state) => state.details.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDetails(char_id));
    }, [char_id])
    if (status === 'failed') {
        return <Error message={error} />
    }
    return (
        <View>
            {details.map(character =>

                <View key={character.char_id} style={styles.container}>
                    {status === 'loading' && <Loading />}
                    {status !== 'loading' && (
                        <>
                            <Image source={{ uri: character.img }} style={styles.img} />
                            <Text style={styles.text}>Name : <Text style={styles.inline_text}>{character.name}</Text></Text>
                            <Text style={styles.text}>Portrayed: <Text style={styles.inline_text}>{character.portrayed}</Text></Text>
                            <Text style={styles.text}>Nickname: <Text style={styles.inline_text}>{character.nickname}</Text></Text>
                            <Text style={styles.text}>Status: <Text style={styles.inline_text}>{character.status}</Text></Text>
                            <Text style={styles.text}>Occupation: <Text style={styles.inline_text}>{character.occupation[0]}</Text></Text>
                        </>
                    )}
                </View>
            )}
        </View>
    )
}
export default Detail