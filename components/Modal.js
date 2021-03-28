import React from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'
import { loginScreenCss } from '../styles/loginScreenCss'

const [popup, setPopup] = useState(false)

const simpleModal = (props) => {
    return (
        <View style={loginScreenCss.modal}>
            <Modal style={loginScreenCss.modalView}>
                <Text>Modal is open </Text>
                <TouchableOpacity onPress={() => {
                    setData({
                        showMe: false
                    })
                }}>
                    <Text style={loginScreenCss.closeText}>Close Modal</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
export default simpleModal