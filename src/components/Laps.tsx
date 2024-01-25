import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "../utils/time";

interface LapProps {
    lap: {
        index: number;
        time: number;
    };
    bestTime?: number;
    worstTime?: number;
}

/**
 * Component that renders an individual lap. Includes the lap number, time, and if it was increased or decreased from the previous time
 * @param param0
 * @returns
 */
export default function LapDisplay({
    lap: { index, time },
    bestTime,
    worstTime,
}: LapProps): JSX.Element {
    let colour = "black";
    // In the case of a tie, we don't want to update the UI
    if (bestTime !== worstTime) {
        if (time === bestTime) {
            colour = "green";
        }
        if (time === worstTime) {
            colour = "red";
        }
    }
    return (
        <View
            key={index}
            style={{
                ...styles.lap,
                backgroundColor: index % 2 === 0 ? "lightblue" : "lightcyan",
            }}
        >
            <Text style={{ ...styles.lapText, color: colour }}>
                Lap {index}
            </Text>
            <Text style={{ ...styles.lapText, color: colour }}>
                {formatTime(time)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    lap: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 50,
        height: 50,
        alignContent: "center",
        justifyContent: "space-between",
    },
    lapText: {
        flexDirection: "column",
        fontSize: 20,
        height: "100%",
        margin: "auto",
    },
});
