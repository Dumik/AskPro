import React, {FC, useState} from 'react';

import {Box, Button, ScrollView} from '../../legos';
import {Header} from './Header';
import {ScreenProps} from '../types';
import {Post} from '../../components/Post/Post';
import {ProfileStatistic} from '../../components/ProfileStatistic';
import {HeroProfile} from '../../components/HeroProfile';
import {useAppDispatch} from '../../app/hooks';
import {Screens} from '../../navigation';
import {logout} from '../../features/auth/authSlice';
import {QuestionModal} from '../../components/QuestionModal';

export const ProfileScreen: FC<ScreenProps> = ({navigation}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate(Screens.SignIn);
  };

  return (
    <Box height="100%" width="100%" backgroundColor="white">
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <Header title="Profile" handleLogout={handleLogout} />
        <HeroProfile
          avatarURL="https://picsum.photos/id/258/500/900"
          backgroundURL="https://picsum.photos/id/200/150"
          name="Oleg"
          username="@dumik"
        />

        <ProfileStatistic answers={168} likes={582} gifts={20} followers={56} />
        <Box width="100%" alignItems="center" paddingTop={24}>
          <Box width="80%">
            <Button
              title="Ask me a Question"
              onPress={() => handleOpenModal()}
            />
          </Box>
        </Box>
        <Post
          answer="Что тебя неизменно радует?"
          response="Всё, что происходит сейчас, когда-нибудь пройдет. Любые жизненные катаклизмы, омрачающие сегодняшний день, когда-нибудь останутся только блеклым воспоминанием в пучине нашей памяти. Катастрофа сегодня — жизненный опыт завтра. Эмоции утихнут, боль пройдет, пустота заполнится. Мы всегда найдем выход из ситуации, какой бы сложной она не была. Мы так устроены. Так устроена наша психика — искать свет среди тьмы. Мы, как цветы, тянемся к солнцу. Верим в лучшее, часто без всяких на то оснований, и живем, неизменно живем…
Этот свет внутри нас, эта яркая искра, тлеющая даже в самые темные времена, — свидетельство того, что мы созданы для чего-то незыблемого и вечного, для необъятного счастья. Ты понимаешь это, как, наверное, и каждый из нас, хоть иногда и боишься себе в этом признаться. Думаешь, это слишком грандиозно, слишком прекрасно, чтобы быть правдой. Боишься вопросов и еще больше ответов на них. Но они есть. И они всё объясняют. С необычайной точностью и естественностью, оставляя страх и сомнения позади. Даря радость и уверенность в будущем, смысл сегодняшнему дню.
…Впереди прекрасное время — время, когда люди «насладятся обилием мира» и «дети, которые у них родятся, не будут страдать». Когда «немой будет радостно восклицать», а «хромой будет скакать, как олень». Когда никто из живущих «не будет трудиться напрасно». Время, когда «то, что было прежде, больше не вспомнится и не будет тяготить сердце»."
          likes={10}
          date="2017-01-01T00:00:00"
          author="Dumik"
          image="https://cpad.ask.fm/b9f/c0411/73db/4ddc/b961/1888b8aa8735/large/229728.jpg"
          asker="Tarasina"
        />
        <Post
          answer="Тарас, вы спокойный человек или вас легко вывести из себя? Как боретесь со стрессом, общаетесь с токсичными людьми,если контакт неизбежен?"
          response="До чего же приятно, когда обращаются по имени..! Сразу появляется непреодолимое желание ответить). Вообще, я довольно эмоциональный человек, но все же умею контролировать свои эмоции, хотя и не все. И не всегда. У каждого есть триггерные зоны, задевая которые, легко попасть в лимбическую бурю. Будучи холериком по натуре, я по прежнему учусь владеть собой. Это длительный и нелегкий труд. Но он приносит результаты, и это не может не радовать. За долгие годы работы над собой я достиг значительного прогресса в этом плане. Мне очень помогли принципы и советы из Писаний, а в последнее время также терапевтический процесс."
          likes={10}
          date="2017-01-01T00:00:00"
          image="https://picsum.photos/id/299/800/450"
          author="Dumik"
        />

        <Post
          answer="12Что тебя неизменно радует?"
          response="Всё, что происходит сейчас, когда-нибудь пройдет. ас, когда-нибудь пройдет. Любые жизненные катаклизмы, омрачающие сегодняшний день, когда-нибудь останутся только блеклым воспоминанием в пучине нашей памяти. Катастрофа сегодня1 — жизненный опыт завтра."
          likes={10}
          date="2017-01-01T00:00:00"
          image="https://picsum.photos/id/76/200/150"
          author="Dumik"
        />
      </ScrollView>
      <QuestionModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Box>
  );
};
