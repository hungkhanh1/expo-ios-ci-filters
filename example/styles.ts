import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  image: {
    width: 450,
    height: height - 450,
    resizeMode: "cover",
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    experimental_backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    experimental_backgroundImage:
      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
  },

  imagePickerButton: {
    position: "absolute",
    bottom: 150,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  // Reset Image Button
  resetImageButton: {
    position: "absolute",
    bottom: 150,
    right: 88,
    width: 56,
    height: 56,
    borderRadius: 28,

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 215, 0, 0.3)",
  },

  // Professional Header
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    left: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
  editedBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#FFD700",
  },
  editedText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#000000",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  resetButton: {
    backgroundColor: "transparent",
    width: "auto",
    paddingHorizontal: 12,
  },
  resetText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFD700",
  },
  doneButton: {
    backgroundColor: "#FFD700",
  },

  // Value Display
  valueDisplay: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
    alignItems: "center",
    zIndex: 10,
  },
  valueLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: 0.5,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  valueNumber: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: Platform.OS === "ios" ? "SF Mono" : "monospace",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  // Bottom Panel
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    filter: "blur(30px)",
  },

  // Control Panel
  controlPanel: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  sliderSection: {
    paddingHorizontal: 24,
    position: "relative",
  },
  slider: {
    height: 44,
  },
  sliderScale: {
    position: "absolute",
    top: 30,
    left: 24,
    right: 24,
    height: 2,
    pointerEvents: "none",
  },
  scaleMark: {
    position: "absolute",
    width: 2,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 1,
  },
  scaleMarkCenter: {
    left: "50%",
    marginLeft: -1,
  },

  // Secondary Controls
  secondaryControls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  secondaryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  secondaryButtonActive: {
    backgroundColor: "#FFD700",
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.6)",
  },
  secondaryButtonTextActive: {
    color: "#000000",
    fontWeight: "600",
  },

  // Presets
  presetsContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 8,
  },
  presetButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginRight: 8,
  },
  presetButtonActive: {
    backgroundColor: "#FFD700",
  },
  presetText: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
  },
  presetTextActive: {
    color: "#000000",
    fontWeight: "600",
  },

  // Filters List
  filtersList: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
  },
  filtersContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  filterItem: {
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
    paddingVertical: 8,
    left: 30,
  },
  filterItemActive: {
    transform: [{ scale: 1.05 }],
  },
  filterIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  filterIconBoxActive: {
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
  },
  filterIconBoxEdited: {
    borderColor: "#FFD700",
    borderWidth: 1.5,
  },
  filterName: {
    fontSize: 11,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.6)",
    letterSpacing: 0.2,
  },
  filterNameActive: {
    color: "#FFD700",
    fontWeight: "600",
  },
  filterNameEdited: {
    color: "rgba(255, 215, 0, 0.8)",
  },
  editedDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFD700",
  },

  // Tool Groups
  toolGroups: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
  },
  toolGroupsContainer: {
    gap: 12,
    flex: 1,
    justifyContent: "center",
  },
  toolGroup: {
    alignItems: "center",
    marginRight: 20,
  },
  toolGroupActive: {
    transform: [{ scale: 1.05 }],
  },
  toolGroupIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  toolGroupIconActive: {
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
  },
  toolGroupName: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
    letterSpacing: 0.3,
  },
  toolGroupNameActive: {
    color: "#FFD700",
    fontWeight: "600",
  },
});
