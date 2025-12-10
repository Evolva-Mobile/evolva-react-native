import { colors } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray80,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 160,
    gap: 16,
  },
  headerTitle: {
    fontSize: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.gray90,
    backgroundColor: colors.withe100,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.gray90,
    backgroundColor: colors.withe100,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
  },
  listContainer: {
    gap: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.gray90,
    backgroundColor: colors.withe100,
  },
  itemIcon: {
    width: 46,
    height: 46,
    resizeMode: "contain",
  },
  itemTexts: {
    flex: 1,
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemDesc: {
    fontSize: 12,
    color: colors.gray100,
  },
  bottomCtaWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  bottomCta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: "#0d1d8a",
  },
  bottomCtaText: {
    fontSize: 16,
    color: colors.withe100,
  },
  codeModalContent: {
    width: "100%",
    gap: 14,
  },
  codeTitle: {
    fontSize: 18,
    textAlign: "center",
  },
  codeSubtitle: {
    fontSize: 12,
    color: colors.gray100,
    textAlign: "center",
  },
  codeInputBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gray90,
    backgroundColor: colors.withe100,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  codeInput: {
    flex: 1,
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: colors.gray100,
  },
  scanButton: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.gray90,
    backgroundColor: colors.withe100,
  },
});
