import React, { useState } from "react";
import { View, Text, Image} from "react-native";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
         Conecte-se {"\n"}
          e organize suas{"\n"}
          jogatinas{"\n"}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com os seus amigos
        </Text>
        <ButtonIcon title={"Entrar com o Discord"} activeOpacity={0.8} />
      </View>
    </View>
  );
}
