import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Camera, BookOpen, BarChart2, Settings, MessageSquare } from 'lucide-react-native';

const Dashboard = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Knowledge Map</Text>
          <View style={styles.chartPlaceholder}>
            {/* Simple visual representation of mastery */}
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
        </View>

        {/* Action Buttons */}
        <View style={styles.actionGrid}>
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => navigation.navigate('SocratesLens')}
          >
            <View style={[styles.iconCircle, { backgroundColor: '#0284C7' }]}>
              <Camera size={28} color="#FFF" />
            </View>
            <Text style={styles.actionLabel}>Mistake Lens</Text>
            <Text style={styles.actionDesc}>Scan paper & get hints</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => navigation.navigate('TutorChat')}
          >
            <View style={[styles.iconCircle, { backgroundColor: '#7C3AED' }]}>
              <MessageSquare size={28} color="#FFF" />
            </View>
            <Text style={styles.actionLabel}>Socratic Chat</Text>
            <Text style={styles.actionDesc}>Talk to your tutor</Text>
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
  },
  statsCard: {
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F1F5F9',
    marginBottom: 20,
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
  },
  actionGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  actionDesc: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 16,
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
