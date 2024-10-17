import { View, Text, Image } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

export default function CustomDrawer(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 160}}>
                <Image
                    source={require('../../../assets/Logo.png')}
                    resizeMode='center'
                    style={{
                        position: 'absolute',
                        top: -160,
                    }}
                />
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}