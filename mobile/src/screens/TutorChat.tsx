import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Send, ChevronLeft, Wifi, WifiOff } from 'lucide-react-native';
import { modelRouter, ModelResponse } from '../services/ModelRouter';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'tutor';
  source?: 'local' | 'cloud';
}

const TutorChat = ({ navigation }: any) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Socrates. Show me what you're working on, and we can explore it together. What's on your mind?",
      sender: 'tutor'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLocalMode, setIsLocalMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Simulate switching mode in router
      modelRouter.setMode(isLocalMode ? 'local' : 'cloud');
      
      const response: ModelResponse = await modelRouter.generateResponse(inputText);
      
      const tutorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'tutor',
        source: response.source
      };

      setMessages(prev => [...prev, tutorMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageWrapper,
      item.sender === 'user' ? styles.userWrapper : styles.tutorWrapper
    ]}>
      <View style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userBubble : styles.tutorBubble
      ]}>
        <Text style={[
          styles.messageText,
          item.sender === 'user' ? styles.userText : styles.tutorText
        ]}>{item.text}</Text>
        
        {item.source && (
          <View style={styles.sourceTag}>
            <Text style={styles.sourceTagText}>
              {item.source === 'local' ? 'Offline Engine' : 'Cloud Gemini'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={28} color="#F8FAFC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Socratic Tutor</Text>
        <TouchableOpacity 
          style={[styles.modeToggle, isLocalMode && styles.modeToggleLocal]}
          onPress={() => setIsLocalMode(!isLocalMode)}
        >
          {isLocalMode ? <WifiOff size={18} color="#FFF" /> : <Wifi size={18} color="#38BDF8" />}
          <Text style={[styles.modeText, isLocalMode && styles.modeTextLocal]}>
            {isLocalMode ? 'Offline' : 'Online'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messageList}
      />

      {isTyping && (
        <View style={styles.typingContainer}>
          <Text style={styles.typingText}>Socrates is thinking...</Text>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask a question..."
            placeholderTextColor="#64748B"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Send size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  modeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  modeToggleLocal: {
    backgroundColor: '#EF4444',
  },
  modeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#38BDF8',
  },
  modeTextLocal: {
    color: '#FFF',
  },
  messageList: {
    padding: 16,
    paddingBottom: 20,
  },
  messageWrapper: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  userWrapper: {
    justifyContent: 'flex-end',
  },
  tutorWrapper: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: '#38BDF8',
    borderBottomRightRadius: 4,
  },
  tutorBubble: {
    backgroundColor: '#1E293B',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#334155',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#0F172A',
    fontWeight: '500',
  },
  tutorText: {
    color: '#F1F5F9',
  },
  sourceTag: {
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  sourceTagText: {
    fontSize: 10,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  typingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  typingText: {
    fontSize: 12,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#1E293B',
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  input: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#F8FAFC',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  }
});

export default TutorChat;
