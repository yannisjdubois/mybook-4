import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { ListItem, Icon } from '@rneui/base'
import firebase  from '@react-native-firebase/firestore'

const Commandes = () => {

    const [dataCommande, setDataCommande] = React.useState([{id:1,total:"10"}])

    React.useEffect(() => {
        
        // liste les 10 dernières commandes en temps réel grâce à onSnapShot et Limit
        firebase().collection("Commandes").limit(10).onSnapshot(snapShot=>{

            console.log('snapShot', snapShot) ;

            if(!snapShot.empty){

                snapShot.docs.forEach(laCommande=>{

                    console.log(laCommande.id)

                    setDataCommande([
                        ...dataCommande,
                        {
                            id:laCommande.id,
                            ...laCommande.data()
                        }
                    ])

                })
            }
        })
    }, [])

    const ItemCommande = () => {

        return(
            <ListItem bottomDivider>
            <Icon name='av-timer' />
            <ListItem.Content>
              <ListItem.Title>{item.total} € </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )



    }
  return (
    <View>
      <Text>Commandes</Text>

      <FlatList
        data={dataCommande}
        renderItem={({item})=><ItemCommande item={item} />}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Commandes

const styles = StyleSheet.create({})