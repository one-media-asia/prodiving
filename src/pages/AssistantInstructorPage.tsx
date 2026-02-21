import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, UserCheck, BookOpen, Target, Award, MapPin } from "lucide-react";

const AssistantInstructorPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                PADI Assistant Instructor
              </h1>
              <h2 className="text-3xl font-semibold text-ocean-700 mb-8">
                Become a PADI Assistant Instructor on Koh Tao
              </h2>
              <p className="text-xl text-ocean-700 mb-8 max-w-3xl mx-auto">
                Take your first step towards becoming a certified PADI Instructor. The Assistant Instructor course
                provides you with the foundation skills and knowledge to assist PADI Instructors in teaching diving courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 7-10 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 30m</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Contact for pricing</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Contact Us to Enroll
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Your Path to Becoming a PADI Instructor
              </h2>
              <div className="prose prose-lg max-w-none text-ocean-700 mb-12">
                <p className="mb-6">
                  The PADI Assistant Instructor course is your first step towards becoming a fully certified PADI Instructor.
                  This comprehensive program provides you with the essential skills and knowledge to assist PADI Instructors
                  in conducting diving courses and managing student divers.
                </p>
                <p className="mb-6">
                  During this course, you'll learn how to effectively support instructors, work with student divers,
                  and develop the professional skills needed in the diving industry. Koh Tao provides the perfect
                  environment for this training with its excellent dive sites and experienced training team.
                </p>
                <p className="mb-6">
                  Upon completion, you'll be qualified to assist with PADI courses and will have gained valuable
                  experience that prepares you for the full PADI Instructor Development Course (IDC).
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ocean-900 mb-6">Professional Development Opportunity</h3>
              <div className="bg-ocean-50 p-6 rounded-lg mb-12">
                <p className="text-ocean-700">
                  The Assistant Instructor rating opens doors to professional opportunities in the diving industry.
                  You'll gain hands-on experience working with students, develop leadership skills, and build
                  confidence in your ability to teach and guide divers. This course serves as excellent preparation
                  for those aspiring to become full PADI Instructors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Assistant Instructor Course Includes
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Course Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive instructor training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Student supervision techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional presentation skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Diving equipment knowledge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Emergency response training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PADI certification upon completion</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Be at least 18 years old</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Hold current PADI Divemaster certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete medical questionnaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Demonstrate good physical fitness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum 60 logged dives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valid CPR certification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                PADI Assistant Instructor Course Structure
              </h2>
              <p className="text-lg text-ocean-700 mb-12 text-center">
                The course consists of knowledge development, practical training, and professional development components.
              </p>

              {/* Knowledge Development */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-600" />
                    Knowledge Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The Assistant Instructor course covers essential topics for instructor training:</p>
                  <ul className="space-y-2 mb-4">
                    <li>• PADI Instructor standards and procedures</li>
                    <li>• Teaching and presentation techniques</li>
                    <li>• Student assessment and evaluation</li>
                    <li>• Diving equipment and maintenance</li>
                    <li>• Emergency procedures and risk management</li>
                    <li>• Professional conduct and ethics</li>
                  </ul>
                  <p>Theory sessions are combined with practical demonstrations and supervised teaching opportunities.</p>
                </CardContent>
              </Card>

              {/* Practical Training */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-ocean-600" />
                    Practical Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Supervised teaching of diving skills</li>
                    <li>• Student diver briefings and debriefings</li>
                    <li>• Equipment setup and maintenance</li>
                    <li>• Dive site management assistance</li>
                    <li>• Emergency response demonstrations</li>
                    <li>• Professional presentation practice</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Professional Development */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-ocean-600" />
                      Professional Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Throughout the course, you'll be evaluated on professional standards including:</p>
                  <ul className="space-y-1">
                    <li>• Professional appearance and demeanor</li>
                    <li>• Effective communication with students</li>
                    <li>• Leadership and mentoring abilities</li>
                    <li>• Adherence to PADI standards</li>
                    <li>• Environmental awareness and responsibility</li>
                    <li>• Teamwork and cooperation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Benefits */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Why Choose Pro Diving for Your Assistant Instructor Course?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-ocean-600" />
                      Perfect Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koh Tao offers ideal conditions for instructor training with excellent dive sites and year-round diving.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-ocean-600" />
                      Expert Instructors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from experienced PADI Course Directors with decades of teaching experience.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-ocean-600" />
                      Career Advancement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Essential step towards becoming a full PADI Instructor and advancing your diving career.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Start Your Instructor Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What is the difference between Divemaster and Assistant Instructor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The Assistant Instructor rating allows you to assist PADI Instructors with teaching, while Divemaster focuses on dive leadership and supervision. Assistant Instructor is the first step towards full instructor certification.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How long does the Assistant Instructor course take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The course typically takes 7-10 days to complete, depending on your experience level and the number of students available for training practice.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Can I teach courses as an Assistant Instructor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, you can assist PADI Instructors with teaching Open Water and other entry-level courses, but you cannot conduct courses independently until you complete the full Instructor Development Course.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What are the job opportunities for Assistant Instructors?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Assistant Instructors can work at dive centers, assist with courses, and gain valuable experience. Many dive centers hire Assistant Instructors for their diving operations and course assistance.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AssistantInstructorPage;