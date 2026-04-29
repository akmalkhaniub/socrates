import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Camera, BookOpen, BarChart2, Settings, MessageSquare } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Dashboard = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Glow */}
      <View style={styles.glowTop} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hello, Student!</Text>
            <Text style={styles.subHeaderText}>Ready to master new concepts?</Text>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Knowledge Map Card */}
        <LinearGradient
          colors={['#1E293B', '#0F172A']}
          style={styles.statsCard}
        >
          <Text style={styles.cardTitle}>Knowledge Map</Text>
          <View style={styles.chartPlaceholder}>
            <View style={[styles.bar, { height: 100, backgroundColor: '#38BDF8' }]} />
            <View style={[styles.bar, { height: 60, backgroundColor: '#818CF8' }]} />
            <View style={[styles.bar, { height: 120, backgroundColor: '#F472B6' }]} />
            <View style={[styles.bar, { height: 80, backgroundColor: '#4ADE80' }]} />
          </View>
          <View style={styles.statsFooter}>
            <Text style={styles.statsText}>Math</Text>
            <Text style={styles.statsText}>Science</Text>
            <Text style={styles.statsText}>English</Text>
            <Text style={styles.statsText}>History</Text>
          </View>
        </LinearGradient>

        {/* Action Buttons */}
        <View style={styles.actionGrid}>
          <TouchableOpacity 
            style={styles.actionCardWrapper}
            onPress={() => navigation.navigate('SocratesLens')}
          >
            <LinearGradient
              colors={['#0284C7', '#0369A1']}
              style={styles.actionCard}
            >
              <View style={styles.iconCircle}>
                <Camera size={28} color="#FFF" />
              </View>
              <Text style={styles.actionLabel}>Mistake Lens</Text>
              <Text style={styles.actionDesc}>Scan paper & get hints</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionCardWrapper}
            onPress={() => navigation.navigate('TutorChat')}
          >
            <LinearGradient
              colors={['#7C3AED', '#5B21B6']}
              style={styles.actionCard}
            >
              <View style={styles.iconCircle}>
                <MessageSquare size={28} color="#FFF" />
              </View>
              <Text style={styles.actionLabel}>Socratic Chat</Text>
              <Text style={styles.actionDesc}>Talk to your tutor</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.recentItem}>
          <BookOpen size={20} color="#38BDF8" />
          <View style={styles.recentTextContainer}>
            <Text style={styles.recentItemTitle}>Algebra Worksheet</Text>
            <Text style={styles.recentItemSubtitle}>3 mistakes identified • 10m ago</Text>
          </View>
        </View>
        
        <View style={styles.recentItem}>
          <BarChart2 size={20} color="#4ADE80" />
          <View style={styles.recentTextContainer}>
            <Text style={styles.recentItemTitle}>Mastery Level Up!</Text>
            <Text style={styles.recentItemSubtitle}>Geometry concepts mastered</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  glowTop: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    letterSpacing: -0.5,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#94A3B8',
    marginTop: 4,
  },
  settingsButton: {
    padding: 8,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  statsCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 20,
    letterSpacing: 0.2,
  },
  chartPlaceholder: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 140,
    paddingHorizontal: 10,
  },
  bar: {
    width: 40,
    borderRadius: 8,
  },
  statsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  statsText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
  actionGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  actionCardWrapper: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  actionCard: {
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    height: 160,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  actionDesc: {
    fontSize: 12,
    color: 'rgba(248, 250, 252, 0.7)',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 16,
    letterSpacing: -0.2,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  recentTextContainer: {
    marginLeft: 16,
  },
  recentItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F1F5F9',
  },
  recentItemSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
  }
});

export default Dashboard;
