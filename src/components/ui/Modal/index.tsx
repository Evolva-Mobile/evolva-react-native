import { colors, fonts } from "@/src/styles/theme";
import { ReactNode } from "react";
import { Modal, ModalProps, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon";

type GlobalModalProps = {
  children: ReactNode;
  onClose?: () => void;
  contentStyle?: object; // para customizar o container interno
} & ModalProps;

export function GlobalModal({ children, onClose, contentStyle, ...modalProps }: GlobalModalProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      {...modalProps} 
    >
      <View style={styles.overlay}>
        <View style={[styles.content, contentStyle]}>
          {onClose && (
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={onClose}>
                <Icon name="X" />
              </TouchableOpacity>
            </View>
          )}

          {/* Conteúdo do modal */}
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    padding: 22,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 18,
    alignItems: 'center',
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
  },
});
